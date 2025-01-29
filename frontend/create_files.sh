#!/bin/bash

# Ask for the number of files
echo "Enter the number of files you want to create:"
read num_files

# Ask for folder name
echo "Enter the folder name where you want to create the files:"
read folder_name

# Create the folder if it doesn't exist
mkdir -p $folder_name

# Create files with user-provided names
for ((i=1; i<=num_files; i++))
do
  echo "Enter the name for file $i (with extension, e.g., file$i.txt):"
  read file_name
  touch "$folder_name/$file_name"
  echo "Created $folder_name/$file_name"
done

echo "All files have been created!"
