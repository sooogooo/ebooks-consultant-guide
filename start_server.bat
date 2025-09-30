@echo off
echo 正在启动电子书预览服务器...
python server.py
if %ERRORLEVEL% NEQ 0 (
    echo 启动失败! 请确保Python已安装并添加到系统PATH中。
    echo 或者尝试手动运行: python server.py
    pause
) else (
    echo 服务器已启动
    echo 请在浏览器中访问 http://localhost:8000
    pause
)