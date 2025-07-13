import { FlameIcon } from "lucide-react";
import Link from "next/link";
import { Link as ViewTransitionsLink } from "next-view-transitions";
import React, { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <div className="sticky top-0 right-0 left-0 z-50">
        <div className="w-full bg-white dark:bg-black/5">
          <div className="flex w-full flex-col items-center justify-center">
            <div className="relative flex w-full items-center justify-between rounded-b-[28px] border-x border-b border-[rgba(230,230,230,0.7)] bg-linear-to-b from-white/90 via-gray-50/90 to-white/90 px-4 py-2.5 shadow-[0_2px_20px_-2px_rgba(0,0,0,1)] backdrop-blur-md transition-all duration-300 ease-in-out sm:max-w-[1200px] sm:min-w-[800px] dark:border-[rgba(70,70,70,0.7)] dark:from-zinc-900/90 dark:via-zinc-800/90 dark:to-zinc-900/90">
              <div className="justify-betweenw-full relative z-10 flex items-center gap-2">
                {/* Logo section */}
                <div className="flex items-center gap-6">
                  <Link href="/" className="flex items-center gap-2">
                    <FlameIcon className="h-6 w-6 text-green-500 dark:text-green-400" />
                    <span className="hidden font-semibold sm:block">
                      Codesnippet UI
                    </span>
                  </Link>
                  <span className="text-zinc-300 dark:text-zinc-700">|</span>
                  {/* Desktop navigations */}
                  <div className="hidden items-center gap-4 sm:flex">
                    <ViewTransitionsLink
                      href="/docs/components/background-paths"
                      className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                      Components
                    </ViewTransitionsLink>
                    <ViewTransitionsLink
                      href="/pricing"
                      className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                      Pricing
                    </ViewTransitionsLink>
                  </div>
                </div>
                {/* Nav Items */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
