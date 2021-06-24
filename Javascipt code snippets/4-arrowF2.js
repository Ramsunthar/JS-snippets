const print = {
  function1: function () {
    console.log("1st function :", this);
  },

  function2: () => {
    console.log("2nd function :", this);
  },
};

print.function1();
print.function2();

