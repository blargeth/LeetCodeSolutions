class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        
        result = 0
        count = 0
        for i in range(len(nums)):
            if nums[i] == 1:
                count = count + 1
                result = max(count, result)
            if nums[i] != 1:
                count = 0
        return result