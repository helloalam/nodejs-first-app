// const gfname = "MrsRandom";
// export const gfname2 = "MrsRandom2";
// export const gfname3 = "MrsRandom3";

// module.exports = gfname;
// Use another method for export and import method
// export default gfname;
// export {gfname2,gfname3};

export const generateLovePercent =() =>{
    return `${~~(Math.random() * 100)}%`;
}