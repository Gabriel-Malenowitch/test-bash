 - Download repo:
```console
git clone https://github.com/Gabriel-Malenowitch/test-bash.git
cd test-bash
```
 - Open `run.mjs` script and paste your commands in `command` const. Example:
 Obs: If you wanna to test in some repo, fill `path` const with your directory. Else keep like default.
 ```javascript
const path = '/home/myuser/myproject'
const commands = [
'echo testing 1',
'echo testing 2',
'echo testing 3',
]
 ```

Install google zx (https://github.com/google/zx)

  - Run:
  ```console
  zx test.mjs
  ```
