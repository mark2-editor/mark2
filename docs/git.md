# Git workflow

Git is a tool that keeps a record of changes to files. Think of it as a timeline for a folder: you can see what changed, save named checkpoints, and return to an earlier checkpoint when needed. Mark2 puts the common Git actions in a visual panel, so you do not need to use a terminal.

## A few words you will see

| Term       | Plain meaning                                             |
| :--------- | :-------------------------------------------------------- |
| Repository | A folder whose changes Git keeps track of                 |
| Commit     | A named checkpoint of saved changes                       |
| Branch     | A separate line of work, useful for trying an idea safely |
| Remote     | Another copy of the repository, often on a server         |
| Stage      | Choose which changes belong in the next checkpoint        |

## Get started

Install Git, then open a folder or file that belongs to a Git repository. If Mark2 says Git cannot be found, Git needs to be installed or made available to the system.

Open the **Git** panel to see the current branch, changed files, and staged files. You can then:

1. Open a diff to see exactly what changed.
2. Stage the files or individual changes you want to keep in the next checkpoint.
3. Enter a short message and choose **Commit**.

<Mark2DocImage dark-src="/mark2-git-dark.png" light-src="/mark2-git-light.png" alt="Mark2 Git panel showing changes and recent commits." caption="Review repository changes and recent commits without leaving the editor." />

Mark2 can use AI to suggest a commit message. You can review and edit it before committing.

## Work with branches and a remote copy

Create a branch when you want to try changes without disturbing your main line of work. Later, you can switch branches or merge one branch into another.

If the repository has a remote copy, use **Fetch**, **Pull**, **Push**, or **Sync** to keep the two copies up to date. When Mark2 asks how to combine different changes, **Merge** keeps both lines and adds a new checkpoint; **Rebase** places your changes after the latest remote changes and is more suitable for users who already know Git.
