 // Definition for a Node.
  function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
 };

/**
 * @param {Node} root
 * @return {Node}
 */
var given = new Node(1, 
    new Node(2, new Node(4), new Node(5)), 
    new Node(3, new Node(6), new Node(7))
);

// var connect = function(root) {
//     helper(root, null);
    
//     return root;
    
//     function helper(node, next) {
//       if(!node) return null;
//       else helper(node.left, helper(node.right));

//       node.next = next;
//       return node;
//     }
//   };

// function connect(root) {
//     var q = [root];
//     while(q.length) {
//         var size = q.length;
//         for(var i = 0; i < size; i++) {
//             var curr = q.shift();

//             if(i < size -1) {
//                 curr.next = q[0];
//             }

//             if(curr.left) q.push(curr.left);
//             if(curr.right) q.push(curr.right);
//         }
//     }

//     return root;
// }

/*function connect(root) {
     helper(root);
    
     return root;
    
     function helper(node) {

        if(!node) return null;

        if(node.left && node.right) {
            node.left.next = node.right;

            if(node.left.right) node.left.right.next = node.left.next.left;
            if(node.right.right) node.right.right.next = node.right.next.left;
        }

        helper(node.left);
        helper(node.right);

       return node;
     }
}*/

function connect(root) {
    if(!root) return null;

    iteratie(root);

    function iteratie(p) {
        console.log(p.val);
        if(p.right) iteratie(p.right);
        if(p.left) iteratie(p.left);
    }

    return root;
}

var res = connect(given);
console.log(res);
console.log('ok');