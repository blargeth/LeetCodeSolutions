class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        
        for i in range(1,len(nums)):
            print(i)
            nums[i] = nums[i] + nums[i-1]
        return(nums)