import '../css/index.css';

function func(...args) {
  // console.log(args)
  const res = args.reduce((preValue, element) => preValue + element, 0);
  return res;
}

func(1, 2, 3, 4, 5, 6);
