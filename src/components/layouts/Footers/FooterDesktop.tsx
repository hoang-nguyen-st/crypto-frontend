import { GitHubIcon, TwitterIcon, LinkedInIcon } from "@components/icons";

export const FooterDesktop = () => {
  return (
    <footer className="border-t bg-slate-600">
      <div className="px-20 py-12">
        <div className="flex items-start justify-between gap-8">
          <div className="max-w-sm">
            <span className="text-xl font-semibold text-white">
              Crypto Frontend
            </span>
            <p className="mt-2 text-sm text-gray-300">
              Nền tảng theo dõi và giao dịch tài sản số. Cập nhật nhanh, bảo mật
              và thân thiện với người dùng.
            </p>
            <div className="mt-4 flex items-center gap-4 text-gray-300">
              <a
                href="#"
                aria-label="GitHub"
                className="text-white transition-colors"
              >
                <GitHubIcon />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-white transition-colors"
              >
                <TwitterIcon />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-white transition-colors"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-12 text-sm">
            <div>
              <h3 className="font-medium text-white">Sản phẩm</h3>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li>
                  <a href="#" className="text-white">
                    Bảng giá
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Giao dịch
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Ví
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-white">Công ty</h3>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li>
                  <a href="#" className="text-white">
                    Về chúng tôi
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Tuyển dụng
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-white">Hỗ trợ</h3>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li>
                  <a href="#" className="text-white">
                    Trung tâm trợ giúp
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Tài liệu
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Bảo mật
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t pt-6 text-sm text-gray-300">
          <p>
            © {new Date().getFullYear()} Crypto Frontend. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">
              Điều khoản
            </a>
            <a href="#" className="hover:text-white">
              Quyền riêng tư
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
