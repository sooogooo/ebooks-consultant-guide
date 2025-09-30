import http.server
import socketserver
import os
import sys

# 设置服务器端口
PORT = 8000

# 获取当前目录
current_dir = os.path.dirname(os.path.abspath(__file__))
print(f"当前工作目录: {current_dir}")

# 检查目录是否存在index.html文件
index_path = os.path.join(current_dir, 'index.html')
if not os.path.exists(index_path):
    print("错误: 未找到index.html文件，请确保脚本在正确的目录中运行。")
    sys.exit(1)

# 更改工作目录到当前脚本所在目录
try:
    os.chdir(current_dir)
    print(f"已切换到目录: {current_dir}")
except Exception as e:
    print(f"切换目录失败: {e}")
    sys.exit(1)

# 创建服务器
Handler = http.server.SimpleHTTPRequestHandler

# 自定义Handler以添加更多日志
class CustomHandler(Handler):
    def log_message(self, format, *args):
        print(f"[{self.log_date_time_string()}] {format % args}")

try:
    with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
        print(f"服务器启动在 http://localhost:{PORT}")
        print(f"请在浏览器中访问 http://localhost:{PORT} 预览网站")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("服务器已停止")
            httpd.server_close()
        except Exception as e:
            print(f"服务器异常: {e}")
            httpd.server_close()
except Exception as e:
    print(f"创建服务器失败: {e}")
    sys.exit(1)