import { Box, Card, Typography, useTheme } from "@mui/material";
import { FunctionComponent } from "react";

type Props = { tag: string; description: string };

const Issue: FunctionComponent<Props> = ({ tag, description }) => {
  const { palette } = useTheme();
  return (
    <Box
      sx={{
        marginTop: 3,
        "& .issue-card": { backgroundColor: palette.primary.lighter },
        "& .issue-card_tag": { color: palette.primary.dark },
        "& .issue-card_description": { color: palette.primary.dark },
      }}
    >
      <Card className="issue-card">
        <Typography
          variant="caption"
          fontWeight="light"
          className="issue-card_tag"
        >
          {tag}
        </Typography>
        <Typography variant="body2" className="issue-card_description">
          {description}
        </Typography>
      </Card>
    </Box>
  );
};

export default Issue;
