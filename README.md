# Pig Latin

## Specifications

| Behavior: | Input Example: | Output Example: |
| - | - | - |
| **Our program should handle:** | **When it receives:** | **It should return:** |
| The program displays user input|abc|abc|
| The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels. | 3 | 3 |
| The program adds "way" to single-letter words beginning with a vowel. | i | iway |
| The program adds "way" to multi-letter words beginning with a vowel. | are | areway |
| The program moves all of the first consecutive consonants of words beginning with one or more consonant to the end (and adds "ay" / treats the result the same as a word beginning with a vowel). | shop | opshay |
| The program treats words beginning with "y" as a consonant. | you | ouyay |
| The program moves the "u" along with the "q" if the first consonants include "qu". | quit | itquay |
| The program moves the first consonant and "qu" together. | squeal | ealsquay |
