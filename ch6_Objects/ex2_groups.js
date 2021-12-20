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

let group1 = new Group();
for(let n of [2, 3, 5, 7, 100, 1001]){
    group1.add(n);
}
console.log(group1); // -> Group { content: [ 2, 3, 5, 7, 100, 1001 ] }

group1.delete(5);
group1.delete(200);
group1.delete(1001);
group1.add(7);
console.log(group1); // -> Group { content: [ 2, 3, 7, 100 ] }

let group2 = Group.from(["A", "B100", "C", "D", "1001"][Symbol.iterator]());
console.log(group2); // -> Group { content: [ 'A', 'B100', 'C', 'D', '1001' ] }
