function find_average(array) {
    let total = array.reduce((sum, each) => sum + each, 0);
    return total/array.length;
  }