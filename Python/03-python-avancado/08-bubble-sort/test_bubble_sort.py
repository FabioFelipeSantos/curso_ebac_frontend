import unittest
from bubble_sort import bubble_sort

class BubbleSortTest(unittest.TestCase):
    def test_default_array(self):
        self.assertEqual(bubble_sort([5,3,1,4,2]), [1,2,3,4,5])
    
    def test_array_with_same_value(self):
        self.assertEqual(bubble_sort([2,2,2,2]), [2,2,2,2])

if __name__ == "__main__":
    unittest.main()
