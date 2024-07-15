// 百万内质数
use std::{sync::mpsc, thread};

fn main() {
    const NUM: i32 = 1_000_000;
    const COUNT: i32 = 10;
    let (sender, receiver) = mpsc::channel::<Vec<i32>>();
    let _logger_thread = thread::spawn(move || {
        let mut total_result = vec![];
        let mut count = COUNT;
        while let Ok(s) = receiver.recv() {
            count -= 1;
            total_result.extend_from_slice(&s);
            println!("线程{:?}完成查找{}", thread::current().id(), COUNT - count);
            if count == 0 {
                println!("{:?}", total_result)
            }
        }
    });
    let mut sender_threads = vec![];

    for index in 0..COUNT {
        let tx = sender.clone();
        sender_threads.push(thread::spawn(move || {
            let mut prime_numbers = vec![];
            for n in index * NUM / COUNT..(index + 1) * NUM / COUNT {
                let mut res = true;
                for i in 2..n / 2 + 1 {
                    if n % i == 0 {
                        res = false;
                        break;
                    }
                }
                if res && n > 1 {
                    prime_numbers.push(n)
                }
            }
            tx.send(prime_numbers).unwrap();
        }))
    }

    for st in sender_threads {
        st.join().unwrap();
    }
    _logger_thread.join().unwrap();
}
