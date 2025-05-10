#!/bin/bash
git add .
read -p "請輸入Commit內容:" msg
git commit -m "$msg"
git push