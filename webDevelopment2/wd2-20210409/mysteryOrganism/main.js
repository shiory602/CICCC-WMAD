/*
Mysterious Organism

Project Goals
Context: You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. Your team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. The small DNA samples and frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. However, P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive. Your job is to create objects that simulate the DNA of P. aequor for your research team to study.
As you progress through the steps, use the terminal and console.log() statements to check the output of your loops and functions.

Project Requirements
1.
Look over the starter code. There are two helper functions: returnRandBase() and mockUpStrand().
DNA is comprised of four bases (Adenine, Thymine, Cytosine, and Guanine). When returnRandBase() is called, it will randomly select a base and return the base ('A','T','C', or 'G').
mockUpStrand() is used to generate an array containing 15 bases to represent a single DNA strand with 15 bases.
You’ll use these helper functions later to create your objects that represent P. aequor.


2.
Since you need to create multiple objects, create a factory function pAequorFactory() that has two parameters:
● The first parameter is number (no two organisms should have the same number).
● The second parameter is an array of 15 DNA bases.
pAequorFactor() should return an object that contains the properties specimenNum and dna that correspond to the parameters provided.
You’ll also add more methods to this returned object in the later steps.

3.
Your team wants you to simulate P. aequor‘s high rate of mutation (change in its DNA).
To simulate a mutation, in pAequorFactory()‘s returned object, add the method .mutate().
.mutate() is responsible for randomly selecting a base in the object’s dna property and changing the current base to a different base. Then .mutate() will return the object’s dna.
For example, if the randomly selected base is the 1st base and it is 'A', the base must be changed to 'T', 'C', or 'G'. But it cannot be 'A' again.

4.
Your research team wants to be able to compare the DNA sequences of different P. aequor.
You’ll have to add a new method (.compareDNA()) to the returned object of the factory function.
.compareDNA() has one parameter, another pAequor object.
The behavior of .compareDNA() is to compare the current pAequor‘s .dna with the passed in pAequor‘s .dna and compute how many bases are identical and in the same locations.
.compareDNA() does not return anything, but prints a message that states the percentage of DNA the two objects have in common — use the .specimenNum to identify which pAequor objects are being compared.

For example:
ex1 = ['A', 'C', 'T', 'G']
ex2 = ['C', 'A', 'T', 'T']

ex1 and ex2 only have the 3rd element in common ('T') and therefore, have 25% (1/4) of their DNA in common. The resulting message would read something along the lines of: specimen #1 and specimen #2 have 25% DNA in common.

5.
P. aequor have a likelier chance of survival if their DNA is made up of at least 60% 'C' or 'G' bases.
In the returned object of pAequorFactory(), add another method .willLikelySurvive().
.willLikelySurvive() returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. Otherwise, .willLikelySurvive() returns false.

6.
With the factory function set up, your team requests that you create 30 instances of pAequor that can survive in their natural environment. Store these instances in an array for your team to study later.
*/


// Returns a random DNA base ... 'A', 'T', 'C' or 'G'
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases ... eg.['C', 'C', 'G', 'D', 'A', 'G', 'D', 'C', 'G', 'D', 'C', 'G', 'D', 'C', 'G']
const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase());
    }
    return newStrand;
};

// create multiple objects
const pAequorFactory = (num, strandDnaBaseArr) => {
    let obj = {
        specimenNum: num, // number (no two organisms should have the same number)
        dna: strandDnaBaseArr, // 15 DNA bases

        // 15個あるDNAが突然変異する
        // 1. objのdnaプロパティにある塩基をランダムに選択
        // 2. 現在の塩基を別の塩基に変更する（AだったとしたらTCGのどれか）
        // 3. objのdnaを返す
        mutate: function () {
            const dnaBases = ['A', 'T', 'C', 'G'];
            const dnaIndex = Math.floor(Math.random() * this.specimenNum); // 1. 0 ~ 14 のランダムの数字を作る
            let targetDna = this.dna[dnaIndex]; // 'A', 'T', 'C' or 'G'
            let dnaBaseIndex = dnaBases.indexOf(targetDna)
            let randomIndex = Math.floor(Math.random() * 3); // 0〜2のランダムの数字を作る
            if(randomIndex === dnaBaseIndex) {
                randomIndex = Math.floor(Math.random() * 4);
            }
            targetDna = dnaBases[randomIndex];
            return this.dna;
        },

        // 何パーセントの確率で一致しているか
        compareDNA: function (dnaData) {
            if (!Array.isArray(this.dna)) return false;
            if (!Array.isArray(dnaData)) return false;
            let n = 0;
            for (let i = 0; i < this.specimenNum; ++i) {
                if (this.dna[i] === dnaData[i]) n++;
            }
            let percentage = n / this.specimenNum * 100;
            console.log(`specimen #1 and specimen #2 have ${n / this.specimenNum * 100}% DNA in common.`);
            return true;
        },

        // 生存率の高さ
        willLikelySurvive: function() {
            let result = this.dna.filter(n => n === 'C' || n === 'G').length / 15;
            return result >= 0.6 ? true : false;// 60% of C or G
        },
    }
    return obj;
}

// create 30 instances of pAequor that can survive in their natural environment
const pAequorSurvive = [];
let specimenNum = 1;
while(pAequorSurvive.length < 30) {
    let instance = pAequorFactory(specimenNum, mockUpStrand());

    let canSurvive = instance.willLikelySurvive();
    if(canSurvive) {
        pAequorSurvive.push(instance);
        specimenNum++;
    }
};

console.log(pAequorSurvive);