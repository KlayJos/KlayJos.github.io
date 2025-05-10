#Github一鍵push#


#Linux終端機版 文件副檔名:.sh
#!/bin/bash
git add .
read -p "請輸入Commit內容:" msg
git commit -m "$msg"
git push


#Windows終端機版 文件副檔名:.bat
#@echo off
#cd /d %~dp0
#set /p msg=請輸入Commit內容:
#git add .
#git commit -m "%msg%"
#git push
#pause


#使用方式→ 在終端機中輸入: ./文件名(含副檔名)