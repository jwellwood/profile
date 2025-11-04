import React from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CopyToClipboard from "react-copy-to-clipboard";

import { AppIcons, LINKS_LIST } from "../../../constants";
import CustomIcon from "../../../components/icons/CustomIcon";
import { theme } from "../../../lib/theme/theme";
import { useCopy } from "../../../hooks/useCopy";

export default function LinksList() {
  const { copied, onCopy } = useCopy();

  return (
    <List dense>
      {LINKS_LIST.map((item) => {
        const link = (
          <ListItem
            key={item.label}
            sx={{
              textDecoration: "none",
              "&:hover": { textDecoration: "none" },
              "&:visited": { color: "inherit" },
            }}
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href={item.link}
            secondaryAction={
              <IconButton edge="end" aria-label={item.label} color="primary">
                <CustomIcon name="link" size="sm" animate />
              </IconButton>
            }
          >
            <ListItemIcon>
              <CustomIcon name={item.icon} color={theme.palette.info.main} />
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              color={theme.palette.common.white}
            />
          </ListItem>
        );
        return item.link ? (
          link
        ) : (
          <ListItem
            key={item.label}
            secondaryAction={
              <IconButton edge="end" aria-label={item.label} color="primary">
                <CopyToClipboard text={item.label} onCopy={onCopy}>
                  <span style={{ height: 20, width: 20 }}>
                    <CustomIcon
                      size="sm"
                      animate
                      name={copied ? AppIcons.CHECK : AppIcons.COPY}
                      color={
                        copied
                          ? theme.palette.primary.light
                          : theme.palette.primary.main
                      }
                    />
                  </span>
                </CopyToClipboard>
              </IconButton>
            }
          >
            <ListItemIcon>
              <CustomIcon name={item.icon} color={theme.palette.info.main} />
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              color={theme.palette.common.white}
            />
          </ListItem>
        );
      })}
    </List>
  );
}
