@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

REM 파일이 저장된 디렉터리 경로를 현재 배치 파일의 위치로 설정
set "directory=%~dp0"

REM 현재 배치 파일 위치에 저장될 출력 파일 경로 설정
set "outputFile=%directory%fileName.txt"

REM 출력 파일 초기화
echo. > "%outputFile%"

REM 지정된 디렉터리로 이동
cd /d "%directory%"

REM 현재 경로 확인
echo Current directory: %cd%

REM 디렉터리 내의 .md 파일 이름을 추출하여 fileName.txt에 저장
for %%f in (*.md) do (
    set "fileName=%%~nf"
    set "number=!fileName:~0,4!"
    set "name=!fileName:~4!"
    
    echo !number! [!name!](https://github.com/Im-Seon/javascript-grammar/blob/main/00.BASIC/%%f^) >> "%outputFile%"
)

REM 완료 메시지 및 디버그 정보 표시
echo File list has been saved to %outputFile%.
pause