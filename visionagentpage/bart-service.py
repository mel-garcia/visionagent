from transformers import BartForConditionalGeneration, BartTokenizer

# Load the pre-trained BART model and tokenizer
model_name = "facebook/bart-large-cnn"  # You can also use other variations like 'facebook/bart-large'
tokenizer = BartTokenizer.from_pretrained(model_name)
model = BartForConditionalGeneration.from_pretrained(model_name)

# Input text for summarization
input_text = """
Luigi Mangione, who has been charged with killing the chief executive of UnitedHealthcare at a company investors’ day, was arrested with a notebook that detailed plans for the shooting, according to two law enforcement officials.

The notebook described going to a conference and killing an executive, the officials said.

“What do you do? You wack the C.E.O. at the annual parasitic bean-counter convention. It’s targeted, precise, and doesn’t risk innocents,” was one passage written in the notebook, the officials said.

The shooting of the executive, Brian Thompson, occurred early Dec. 4 as Mr. Thompson arrived at a Hilton hotel on West 54th Street to prepare for the UnitedHealthcare investors’ meeting. His assailant escaped on a bicycle and then disappeared.

Mr. Mangione, 26, was captured Monday after a tip from an employee at a McDonald’s in Altoona, Pa., who was alerted by a customer who recognized him.

Mr. Mangione, who faces a murder charge and has been denied bail, is fighting extradition to New York, which starts a process that could take weeks. “He is contesting it,” his lawyer, Thomas Dickey, said on Tuesday.

The suspect was found with a ghost gun, a suppressor and false identification cards similar to those believed to have been used by the killer, officials said. In addition to the false identification cards, he was carrying identification with his real name.

Police officials were able to match Mr. Mangione’s fingerprints to those on a water bottle and a snack bar wrapper recovered near the crime scene, said another senior law enforcement official with knowledge of the investigation. Fingerprints were also found on ballistic evidence at the scene.

When Mr. Mangione was arrested, the authorities also found a 262-word handwritten note with him, which begins by appearing to take responsibility for the murder. The note, which officials described as a manifesto, also mentioned the existence of a notebook. The recovery of the notebook was first reported by CNN.
ßß
The suspect saw the killing as a “symbolic takedown,” according to a New York Police Department internal report that detailed parts of a three-page manifesto found with him at the time of his arrest. The report added that the suspect “likely views himself as a hero of sorts who has finally decided to act upon such injustices” and expressed concern that others might see him as a “martyr and an example to follow.”

On his way into court on Tuesday afternoon, Mr. Mangione shouted about “an insult to the intelligence of the American people and their lived experience.”

It was not exactly clear what he was referring to as deputies worked to push him into the courthouse. On Wednesday, the sheriff of Blair County, James E. Ott, said that otherwise Mr. Mangione had not given deputies any problems.

Mr. Mangione, part of a sprawling and prominent Baltimore family, went to an elite high school in the city and attended the University of Pennsylvania. He had worked at several tech companies and had a long interest in computer games.

In years of posts on a Reddit account, he described a series of life-altering health problems. He said his back pain worsened until a surgery in 2023 and that he had struggled with “brain fog.” But his only reference to insurance coverage in the posts noted that Blue Cross Blue Shield had covered testing for irritable bowel syndrome.

Mr. Mangione stopped communicating with friends and family about six months ago. His mother filed a missing-person report last month.

Ben Brafman, a prominent defense lawyer in New York whose clients have included Sean Combs, Harvey Weinstein and Dominique Strauss-Kahn, said Wednesday that the police had amassed an “overwhelming” amount of evidence that left little room for Mr. Mangione to mount a viable defense at trial.

“This was a rather brazen act of violence,” Mr. Brafman said. “Given that there doesn’t seem to be an inch of Manhattan that isn’t covered in video recording devices, it’s hard to explain away what happened.”

Still, he said, that did not mean that prosecutors’ jobs would be easy. They will have a hard time finding jurors who do not feel they have been treated unfairly by the health care industry.

“I think most people when questioned about that issue will say, ‘Yeah, I dealt with a health care industry that I was unhappy with,’” he said. “But they didn’t go out and execute the head of an insurance company.”

Just hours after Mr. Mangione was arrested on Monday at the McDonald’s in Altoona, a young woman was standing outside the fast food restaurant holding a sign that said “Corrupt insurance C.E.O.s have got to go.”


"""

# Tokenize and encode the input text
inputs = tokenizer.encode("summarize: " + input_text, return_tensors="pt", max_length=1024, truncation=True)

# Generate the summary
summary_ids = model.generate(
    inputs, 
    max_length=180,   # Maximum length of the summary
    min_length=150,    # Minimum length of the summary
    length_penalty=2.0, 
    num_beams=4,      # Beam search for better results
    early_stopping=True
)

# Decode and print the summary
summary = tokenizer.decode(summary_ids[0], skip_special_tokens=True)
print("Summary:", summary)