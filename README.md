# Seq-Lava
This is an implementation of the LAVA (Lightweight Assignment of Variant Alleles) algorithm in the Seq language. 

Seq is a python-dialect developed specifically for bioinformatics problems, combines the ease of use from Python with the speed of C.

LAVA is a computational SNP (Single nucleotide polymorphism) algorithm which detects known SNP in an NGS (new generation sequencing) data set of a certain individual. 
This allows for fast and quick determination of existence of one or more SNP loci in a given specimen.

The Seq implementation has one third of the SLOC (source line of code), its cyclomatic complexity has an average of 6 (range 2-12) while the C implemntation average CC is at 22.
it runs 30 times faster than Python implementation at a speed of 0.85 of the C implementation.

