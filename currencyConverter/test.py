import math
string = "Blue new"

def transformSentence(sentence):
    words = sentence.split(" ")
    newSentence = ""
    for word in words:
        newWord = ""
        newWord += word[0]
        for ptr in range(1, (len(word))):
            print(f"{word[ptr]} {ord(word[ptr])} {ord(newWord[ptr-1])}")
            if ord(newWord[ptr-1].upper()) < ord(word[ptr].upper()):
                newWord += word[ptr].upper()
            elif ord(newWord[ptr-1]) > ord(word[ptr]):
                newWord += word[ptr].lower()
            else:
                newWord += word[ptr]
        newSentence += newWord + " "
    
    print(newSentence)
    return newSentence[:-1]
            
print(transformSentence(string))
