from uagents import Agent, Context, Model
from typing import Optional

# Define our message models
class WebsiteScraperRequest(Model):
    url: str

class WebsiteScraperResponse(Model):
    text: str

# Claude.ai expects TextPrompt and returns TextResponse
class TextPrompt(Model):
    text: str

class TextResponse(Model):
    text: str

# Create our agent
agent = Agent(
    # to run locally uncomment below
    # name = "user",
    # port = "8000",
    # endpoint=["localhost:8000/submit"]
)

# Agent addresses
SCRAPER_ADDRESS = "agent1qwnjmzwwdq9rjs30y3qw988htrvte6lk2xaak9xg4kz0fsdz0t9ws4mwsgs"
CLAUDE_ADDRESS = "agent1qvk7q2av3e2y5gf5s90nfzkc8a48q3wdqeevwrtgqfdl0k78rspd6f2l4dx"
WEBSITE = "https://fetch.ai/"

@agent.on_event("startup")
async def start_scraping(ctx: Context):
    await ctx.send(SCRAPER_ADDRESS, WebsiteScraperRequest(url=WEBSITE))
    ctx.logger.info("Starting website analysis process...")

@agent.on_message(WebsiteScraperResponse)
async def handle_scraping(ctx: Context, sender: str, msg: WebsiteScraperResponse):
    ctx.logger.info("Received website content, preparing request for Claude...")
    
    # Create a clear analysis request for Claude
    analysis_prompt = (
        f"Please analyze and summarize the following website content. "
        f"Focus on the main points and key information: \n\n"
        f"{msg.text[:1000]}..."  # First 1000 chars to avoid overwhelming
    )
    
    try:
        # Send to Claude using TextPrompt format
        msg_status = await ctx.send(
            CLAUDE_ADDRESS,
            TextPrompt(text=analysis_prompt)
        )
        
        ctx.logger.info(f"=== Claude Request Details ===")
        ctx.logger.info(f"Status: {msg_status.status}")
        ctx.logger.info(f"Details: {msg_status.detail}")
        ctx.logger.info("============================")
        
    except Exception as e:
        ctx.logger.error(f"Failed to send to Claude: {e}")

@agent.on_message(TextResponse)
async def handle_claude_response(ctx: Context, sender: str, msg: TextResponse):
    ctx.logger.info(f"=== Received Claude Analysis ===")
    ctx.logger.info(f"From: {sender[-8:]}")  # Last 8 chars of sender address
    ctx.logger.info(f"Analysis:")
    ctx.logger.info(msg.text)
    ctx.logger.info("==============================")

if __name__ == "__main__":
    print("Starting Website Analysis Agent with Claude.ai integration...")
    agent.run()