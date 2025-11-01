import { UpdateUrlWithUniqueParam } from "@/types";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const useUrlParams = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const onUpdateUrlWithUniqueParam = useCallback(
    ({ name, value, updatedPathname = pathname }: UpdateUrlWithUniqueParam) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      const updatedQueryString = params.toString();
      return `${updatedPathname}?${updatedQueryString}`;
    },
    [pathname, searchParams]
  );

  return {
    searchParams,
    onUpdateUrlWithUniqueParam,
  };
};
