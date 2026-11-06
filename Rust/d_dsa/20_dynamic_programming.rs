// DSA Topic 20: 0/1 Knapsack
fn knapsack(weights: &[usize], values: &[usize], capacity: usize) -> usize {
    let n = weights.len();
    let mut dp = vec![vec![0; capacity + 1]; n + 1];

    for i in 1..=n {
        for w in 0..=capacity {
            if weights[i - 1] <= w {
                dp[i][w] = (values[i - 1] + dp[i - 1][w - weights[i - 1]]).max(dp[i - 1][w]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    dp[n][capacity]
}

fn main() {
    println!("Knapsack result: {}", knapsack(&[2, 3, 4], &[3, 4, 5], 5));
}
