import os
import shutil

src_dir = r'c:\Users\enman\Github\Protafolio\src'
old_name = os.path.join(src_dir, 'Components')
new_name = os.path.join(src_dir, 'ui-components')

if os.path.exists(old_name):
    try:
        shutil.move(old_name, new_name)
        print(f"Successfully moved {old_name} to {new_name}")
    except Exception as e:
        print(f"Error moving directory: {e}")
else:
    print(f"Directory {old_name} does not exist")
