// instance variables
var items;
var length;
var rects = [];

class Rectangles {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  show() {
    fill(255);
    rect(this.x, this.y, this.w, this.h);
  }

  changeColour() {
    var c = color(255, 0, 0);
    fill(c);
    rect(this.x, this.y, this.w, this.h);
  }
}

// p5js setup
function setup() {
  createCanvas(720, 600);
  generateRandomArray();
}

// p5js draw
function draw() {
  clear();
  length = items.length;
  temp = rects;
  for (var i  = 0; i < items.length; i++) {
    rects[i] = new Rectangles(i*20, 0, 10, items[i]*10);
    rects[i].show();
  }
}

function generateRandomArray() {
  var arr = [];
  while(arr.length < 30){
      var randomnumber = Math.ceil(Math.random()*30)
      if(arr.indexOf(randomnumber) > -1) continue;
      arr[arr.length] = randomnumber;
  }
  items = arr;
}

function quickSortButton() {
  var t0 = performance.now();
  items = quickSort(items);
  var t1 = performance.now();
  draw();
  document.getElementById("results").innerHTML = "Quick Sort took " + (t1 - t0) + " milliseconds."
}

function mergeSortButton() {
  var t0 = performance.now();
  items = mergeSort(items);
  var t1 = performance.now();
  draw();
  document.getElementById("results").innerHTML = "Merge Sort took " + (t1 - t0) + " milliseconds."
}

function bubbleSortButton() {
  var t0 = performance.now();
  items = bubbleSort(items);
  var t1 = performance.now();
  draw();
  document.getElementById("results").innerHTML = "Bubble Sort took " + (t1 - t0) + " milliseconds."
}

function insertionSortButton() {
  var t0 = performance.now();
  items = insertionSort(items);
  var t1 = performance.now();
  draw();
  document.getElementById("results").innerHTML = "Insertion Sort took " + (t1 - t0) + " milliseconds.";
}

function heapSortButton() {
  var t0 = performance.now();
  items = heapSort(items);
  var t1 = performance.now();
  draw();
  document.getElementById("results").innerHTML = "Heap Sort took " + (t1 - t0) + " milliseconds.";
}

function shellSortButton() {
  var t0 = performance.now();
  items = shellSort(items);
  var t1 = performance.now();
  draw();
  document.getElementById("results").innerHTML = "Shell Sort took " + (t1 - t0) + " milliseconds.";
}

// quickSort
function quickSort(items, left, right) {
  var index;
  if (items.length > 1) {
    left = typeof left != "number" ? 0 : left;
    right = typeof right != "number" ? items.length - 1 : right;

    index = partition(items, left, right);

    if (left < index - 1) quickSort(items, left, index-1);
    if (index < right) quickSort(items, index, right);
  }
  return items;
}

// swap (quickSort)
function swap(items, firstIndex, secondIndex) {
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

// partition (quickSort)
function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)],
  i = left,
  j = right;

  while (i <= j) {
    while (items[i] < pivot) {
      i++
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }
  return i;
}

// mergeSort
function mergeSort(items) {
  if (items.length < 2) return items;

  var middle = parseInt(items.length / 2);
  var left = items.slice(0, middle);
  var right = items.slice(middle, items.length);

  return merge(mergeSort(left), mergeSort(right));
}

// merge (mergeSort)
function merge(left, right) {
  var result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
}

// bubbleSort
function bubbleSort(items) {
    var swapped;
    var dupe = items;
    var result = [];
    do {
      swapped = false;
        for (var i=0; i < items.length-1; i++) {
            if (dupe[i] > dupe[i+1]) {
                var temp = dupe[i];
                dupe[i] = dupe[i+1];
                dupe[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    result = dupe;
    return result;
}

// insertionSort
function insertionSort(items) {
  var temp = items;
  for (var i = 1;  i < items.length; i++) {
    var tmp = temp[i];
    for (var j = i - 1; j >= 0 && (temp[j] > tmp); j--) {
      temp[j+1] = temp[j];
    }
    temp[j+1] = tmp;
  }
  return temp;
}

// heapSort
function heapSort(items) {
  var temporary = items;
  heapify(temporary, temporary.length);

  for (var i = temporary.length - 1; i > 0; i--) {
    swap(temporary, i, 0);

    max_heapify(temporary, 0, i-1);
  }

  return temporary;
}

// heapify (heapSort)
function heapify(temporary) {
  for (var i = Math.floor(length/2); i >= 0; i--) {
    max_heapify(temporary, i, length);
  }
}

// max_heapify (heapSort)
function max_heapify(temporary, i, length) {
  while (true) {
    var left = i * 2 + 1;
    var right = i * 2 + 2;
    var largest = i;

    if (left < length && temporary[left] > temporary[largest]) {
      largest = left;
    }

    if (right < length && temporary[right] > temporary[largest]) {
      largest = right;
    }

    if (i == largest) {
      break;
    }

    swapHeap(temporary, i, largest);
    i = largest;
  }
}

// swapHeap (heapSort)
function swapHeap(temporary, i, j) {
  var temp = temporary[i];
  temporary[i] = temporary[j];
  temporary[j] = temp;
}

// shellSort
function shellSort(items) {
  var temp = items;
  var increment = temp.length / 2;
  while (increment > 0) {
    for (var i = increment; i < temp.length; i++) {
      var j = i;
      var tmp = temp[i];

      while (j >= increment && temp[j-increment] > tmp) {
        temp[j] = temp[j-increment];
        j = j - increment;
      }

      temp[j] = tmp;
    }

    if (increment == 2) {
      increment = 1;
    } else {
      increment = parseInt(increment*5 / 11);
    }
  }
  return temp;
}
