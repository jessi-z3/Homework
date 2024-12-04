Answer the following questions:

- What **_git_** command creates a branch?
  - 'git branch', followed by the new branch name
- What is the difference between a fast-forward and recursive merge?
  - A fast-forward merge is the typical merge that happens when there's no diverging branches. The branch pointer is moved forward to the last commit of the other branch, which keep a linear history of commits.
  - A recursive merge creates a new merge commit to reconsile diverged branch histories.
- What **_git_** command changes to another branch?
  - 'git checkout', followed by the name of the branch
- What **_git_** command deletes a branch?
  - To delete a local branch, use the 'git branch' command with the '-d' flag, followed by the branch name.
- How do merge conflicts happen?
  - A merge conflict happens the two branches you're trying to merge have different changes on the same file. To resolve a merge conflict, I use git status to determine the file in question, then I open the file in the editor and look for the conflict markers of the changes in question. I update the file to have the correct changes then stage and commit. The merge conflict is now resolved, and I can continue merging.
