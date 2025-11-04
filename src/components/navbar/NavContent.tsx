import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import Toolbar from "@mui/material/Toolbar";
import { Button, ButtonGroup } from "@mui/material";

import { LINKS_LIST } from "../../constants";
import { AppIcons } from "../../constants/icon-names";
import CustomIcon from "../../components/icons/CustomIcon";
import { theme } from "../../lib/theme/theme";
import { useCopy } from "../../hooks/useCopy";
import NavLanguage from "./NavLanguage";

export default function NavContent() {
  const { copied, onCopy } = useCopy();

  return (
    <Toolbar
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <NavLanguage />
      <ButtonGroup variant="text" sx={{ cursor: "pointer" }}>
        {LINKS_LIST.map((item) => {
          const link = (
            <Button
              key={item.label}
              aria-label={item.label}
              target="_blank"
              rel="noopener noreferrer"
              href={item.link}
              color="info"
            >
              <CustomIcon name={item.icon} animate />
            </Button>
          );
          return item.link ? (
            link
          ) : (
            <Button aria-label={item.label}>
              <CopyToClipboard text={item.label} onCopy={onCopy}>
                <span style={{ height: "20px" }}>
                  <CustomIcon
                    animate
                    name={copied ? AppIcons.CHECK : AppIcons.EMAIL}
                    color={
                      copied
                        ? theme.palette.primary.light
                        : theme.palette.info.main
                    }
                  />
                </span>
              </CopyToClipboard>
            </Button>
          );
        })}
      </ButtonGroup>
    </Toolbar>
  );
}

NavContent;
