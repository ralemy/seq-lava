// https://atom.io/packages/build

module.exports = {
  cmd: "seqc",
  args: ["-d","{FILE_ACTIVE}",
//  "GCF_000008865.2_ASM886v2_genomic.fna",
    "interleaved.fastq"
  ],
  env: {
    SEQ_PYTHON: "/usr/local/Frameworks/Python.framework/Versions/3.8/lib/libpython3.8.dylib"
  },
  sh: true,
  preBuild: function() {
    console.log('Setting up for build');
  },
  postBuild: function() {
    console.log('Cleanup after build');
  },
  functionMatch: function(output) {
   return output.split(/\r?\n/)
   .filter(line => line.match(/\: error\:/))
   .map(line => line.split(':'))
   .map(args => ({
     file: args[0],
     line: args[1],
     col: args[2],
     message: args.join(':')
   }));
  }
}
