class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        
        result = 0
        for i in range(len(accounts)):
            sum = 0
            for j in range(len(accounts[i])):
                sum = sum + accounts[i][j]
            result = max(sum, result)
        return result