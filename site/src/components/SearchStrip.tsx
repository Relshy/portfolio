"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import styled from "styled-components"
import Icon from "./Icon"

const Strip = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 30px;
  background: var(--white);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  color: #999;

  &:focus-within {
    color: var(--clay);
  }

  @media screen and (max-width: 480px) {
    padding: 10px 20px;
  }
`

const StripInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font: inherit;
  font-size: 1rem;
  color: #333;

  &::placeholder {
    color: #999;
  }
`

export default function SearchStrip() {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const isWorkPage = pathname === "/work"

  const [value, setValue] = useState(() => searchParams.get("q") ?? "")

  return (
    <Strip>
      <Icon icon="search" />
      <StripInput
        type="text"
        placeholder="Search projects..."
        aria-label="Search projects"
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          if (isWorkPage) {
            const params = new URLSearchParams(searchParams.toString())
            if (e.target.value) params.set("q", e.target.value)
            else params.delete("q")
            router.replace(`/work?${params.toString()}`, { scroll: false })
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !isWorkPage && value.trim()) {
            router.push(`/work?q=${encodeURIComponent(value.trim())}`)
          }
        }}
      />
    </Strip>
  )
}
