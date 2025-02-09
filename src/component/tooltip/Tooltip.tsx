import { Tooltip as MuiTooltip, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Tooltip: React.FC = () => {
    return (
    <MuiTooltip title="Delete">
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </MuiTooltip>
  );
}

export default Tooltip;
