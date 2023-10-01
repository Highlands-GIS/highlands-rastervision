# writes out to file the difference between two files
# input: two csv files
# output: a csv file with the difference between the two files
# usage: python diff.py

import os
import csv
import sys

def diff(file1, file2, output_file):
    # open the files
    f1 = open(file1, 'r')
    f2 = open(file2, 'r')
    f3 = open(output_file, 'w')
    # read the files
    f1_reader = csv.reader(f1)
    f2_reader = csv.reader(f2)
    # write the files
    f3_writer = csv.writer(f3)
    # create a list for each file
    f1_list = []
    f2_list = []
    # iterate over the files and append the values to the lists
    for row in f1_reader:
        f1_list.append(row[0])
    for row in f2_reader:
        f2_list.append(row[0])
    # create a set for each file
    f1_set = set(f1_list)
    f2_set = set(f2_list)
    # create a list of the difference between the two sets
    f3_list = list(f2_set.difference(f1_set))
    # write the list to the output file
    for row in f3_list:
        f3_writer.writerow([row])
    # close the files
    f1.close()
    f2.close()
    f3.close()
    # return the number of rows in the output file
    return len(f3_list)


if __name__ == '__main__':
    # get the current working directory
    cwd = os.getcwd()
    # get the input files
    file1 = 'manifest.csv'
    file2 = 'mainfest-huc14.csv'
    # create the output file
    output_file = 'output.csv'
    # call the diff function
    diff(file1, file2, output_file)
    # print the number of rows in the output file
    print(diff(file1, file2, output_file))

