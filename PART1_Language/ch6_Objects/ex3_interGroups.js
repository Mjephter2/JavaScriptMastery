class Group {
    constructor(){
        this.content = [];
    }

    add(value){
        if(this.content.indexOf(value) == -1){
            this.content.push(value);
        }
    }

    delete(value){
        if(this.has(value)){
            let found = this.content.indexOf(value);
            this.content = this.content.slice(0, found).concat(this.content.slice(found + 1));
        }
    }

    has(value){
        return this.content.indexOf(value) > 0;
    }
    
    static from(iter){
        let gr = new Group();
        let currItem = iter.next();
        while(!currItem.done){
            gr.add(currItem.value);
            currItem = iter.next();
        }
        return gr;
    }
}

class GroupIterator {
    constructor(group){
        this.content = group.content;
    }

    next(){
        if(this.content.length > 0){
            let value = this.content.shift();
            return {value, done: false};
        }else{
            return {done: true};
        }
    }
}

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
}

let group3 = Group.from(["A", "B100", "C", "D", "1001"][Symbol.iterator]());
console.log(group3); // -> Group { content: [ 'A', 'B100', 'C', 'D', '1001' ] }
for ( let value of group3){
    console.log(value);
}
/* ->
A
B100
C
D
1001
*/