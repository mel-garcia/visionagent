from uagents import Agent, Context, Model
from transformers import BartForConditionalGeneration, BartTokenizer

# Define request and response models
class WebsiteScraperRequest(Model):
    url: str

class WebsiteScraperResponse(Model):
    text: str

# Initialize the agent
agent = Agent(
    name = "user",
    endpoint="http://localhost:8000/submit"
)

# Agent address to send the request to
AI_AGENT_ADDRESS = "agent1qwnjmzwwdq9rjs30y3qw988htrvte6lk2xaak9xg4kz0fsdz0t9ws4mwsgs"
website_url = "https://fetch.ai/"  # URL of the website to scrape

# Load pre-trained BART model and tokenizer
model_name = "facebook/bart-large-cnn"
tokenizer = BartTokenizer.from_pretrained(model_name)
model = BartForConditionalGeneration.from_pretrained(model_name)

# Function to summarize text using BART
def summarize_text(input_text):
    inputs = tokenizer.encode("summarize: " + input_text, return_tensors="pt", max_length=1024, truncation=True)
    summary_ids = model.generate(
        inputs,
        max_length=130,
        min_length=30,
        length_penalty=2.0,
        num_beams=4,
        early_stopping=True
    )
    return tokenizer.decode(summary_ids[0], skip_special_tokens=True)

# Event triggered on startup
@agent.on_event("startup")
async def send_message(ctx: Context):
    await ctx.send(AI_AGENT_ADDRESS, WebsiteScraperRequest(url=website_url))
    ctx.logger.info(f"Sent request for scraping the website: {website_url}")

# Handle the response from the website scraper agent
@agent.on_message(WebsiteScraperResponse)
async def handle_response(ctx: Context, sender: str, msg: WebsiteScraperResponse):
    ctx.logger.info(f"Received response from {sender[-10:]}:")
    scraped_content = msg.text
    ctx.logger.info(f"Scraped Content:\n{scraped_content[:500]}")  # Display a snippet of the scraped content

    # Summarize the content
    summary = summarize_text(scraped_content)
    ctx.logger.info(f"Summary:\n{summary}")

if __name__ == "__main__":
    agent.run()