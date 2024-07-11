import os
import hashlib

def hash_file(file_path):
    hasher = hashlib.md5()
    with open(file_path, 'rb') as f:
        buf = f.read()
        hasher.update(buf)
    return hasher.hexdigest()

def find_and_remove_duplicates(dir_path):
    files_map = {}
    duplicates = []

    for root, _, files in os.walk(dir_path):
        for file in files:
            file_path = os.path.join(root, file)
            file_hash = hash_file(file_path)
            if file_hash in files_map:
                duplicates.append(file_path)
                print(f"Removing duplicate file: {file_path}")
                os.remove(file_path)
            else:
                files_map[file_hash] = file_path

    return duplicates

# Change '.' to the directory you want to scan for duplicates
duplicates = find_and_remove_duplicates('.')
if duplicates:
    print("Duplicate files removed:")
    for dup in duplicates:
        print(dup)
else:
    print("No duplicates found.")
