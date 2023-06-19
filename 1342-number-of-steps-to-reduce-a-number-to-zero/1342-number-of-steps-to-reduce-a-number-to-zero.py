class Solution:
    def numberOfSteps(self, num: int) -> int:
        
        if num == 0: return 0
        if num == 1: return 1
        current = num
        count = 0
        
        while current != 0:
            if current % 2 == 0:
                current = current / 2
            else:
                current = current - 1
            count = count + 1
        return count
        