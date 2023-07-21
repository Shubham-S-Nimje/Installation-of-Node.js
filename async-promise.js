const Fetchdata = (data, time) => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(data);
        resolve();
      }, time);
    });
    return promise
    }
    
    const Printdata = async () => {
      console.log('a');
      console.log('b');
    
      await Fetchdata('c', 3000);
      await Fetchdata('d', 0);
    
      console.log('e');
    };
    
    Printdata();