import java.util.ArrayList;
import java.util.List;

public class Solution {

	public static List<int[]> findZipRange(List<int[]> range) {
		if(range == null || range.isEmpty()) return null;
		return findZipRange(range, 0, range.size() - 1);
	}

	public static List<int[]> findZipRange(List<int[]> range, int left, int right) {
		if (left == right) {
			List<int[]> split = new ArrayList<int[]>();
			split.add(range.get(left));
			return split;
		}

		int mid = left + (right - left) / 2;
		return mergeZipRange(findZipRange(range, left, mid), findZipRange(range, mid + 1, right));
	}

	public static List<int[]> mergeZipRange(List<int[]> range1, List<int[]> range2) {
		List<int[]> merge = new ArrayList<int[]>();
		int i = 0;
		int j = 0;

		while (i < range1.size() && j < range2.size()) {
			if (merge.isEmpty()) {
				if (range1.get(i)[0] < range2.get(j)[0]) {
					merge.add(range1.get(i));
					i++;
				} else {
					merge.add(range2.get(j));
					j++;
				}
				continue;
			}
			if (range1.get(i)[0] < range2.get(j)[0]) {
				mergeRange(merge, range1.get(i));
				i++;
			} else {
				mergeRange(merge, range2.get(j));
				j++;
			}
		}
		while (i < range1.size()) {
			mergeRange(merge, range1.get(i));
			i++;
		}
		while (j < range2.size()) {
			mergeRange(merge, range2.get(j));
			j++;
		}
		return merge;
	}

	public static void mergeRange(List<int[]> merge, int[] range) {
		int last = merge.size() - 1;
		int lastRight = merge.get(last)[merge.get(last).length - 1];
		int rangeRight = range[range.length - 1];

		if (lastRight < range[0]) {
			merge.add(range);
		} else if (lastRight <= rangeRight) {
			merge.get(last)[merge.get(last).length - 1] = rangeRight;
		}
	}

	public static void main(String[] args) {
		List<int[]> input = new ArrayList<int[]>();
		input.add(new int[] { 94133, 94133 });
		input.add(new int[] { 94200, 94299 });
		input.add(new int[] { 94226, 94399 });

		for (int[] arr : findZipRange(input))
			System.out.println(arr[0] + " " + arr[1]);
	}

}
