public class DSUDemo {
    int[] parent;
    public DSUDemo(int n) {
        parent = new int[n];
        for (int i = 0; i < n; i++) parent[i] = i;
    }
    public int find(int i) {
        if (parent[i] == i) return i;
        return parent[i] = find(parent[i]);
    }
    public boolean union(int i, int j) {
        int rI = find(i), rJ = find(j);
        if (rI == rJ) return false;
        parent[rI] = rJ;
        return true;
    }
    public static void main(String[] args) {
        DSUDemo dsu = new DSUDemo(4);
        dsu.union(0, 1);
        System.out.println("0 & 1 connected? " + (dsu.find(0) == dsu.find(1)));
    }
}
