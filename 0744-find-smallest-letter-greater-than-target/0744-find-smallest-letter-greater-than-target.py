class Solution:
    def nextGreatestLetter(self, letters: List[str], target: str) -> str:

# edge - target is z
# iterate over the letters

        if target == "z":
            return letters[0]
        for letter in letters:
            if letter > target:
                return letter
        return letters[0]