class Solution:
    def shortestDistance(self, wordsDict: List[str], word1: str, word2: str) -> int:
        
        result = float('inf')
        index1 = index2 = float('-inf')

        for index, word in enumerate(wordsDict):
            if word == word1:
                index1= index
                result = min(index1 - index2, result)
            if word == word2:
                index2= index
                result = min(index2 - index1, result)
        return result


  