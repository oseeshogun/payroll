import { Doughnut } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
  useTheme
} from '@material-ui/core';
import { Person, Business, Assistant } from '@material-ui/icons';

const EmployeesByType = (props:any) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [63, 15, 22],
        backgroundColor: [
          colors.indigo[500],
          colors.red[600],
          colors.orange[600]
        ],
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white
      }
    ],
    labels: ['Journalier', 'Cadre', 'Consultant']
  };

  const options = {
    // animation: false,
    // cutoutPercentage: 80,
    // layout: { padding: 0 },
    // legend: {
    //   display: false
    // },
    // maintainAspectRatio: false,
    // responsive: true,
    // tooltips: {
    //   backgroundColor: theme.palette.background.paper,
    //   bodyFontColor: theme.palette.text.secondary,
    //   borderColor: theme.palette.divider,
    //   borderWidth: 1,
    //   enabled: true,
    //   footerFontColor: theme.palette.text.secondary,
    //   intersect: false,
    //   mode: 'index',
    //   titleFontColor: theme.palette.text.primary
    // }
  };

  const devices = [
    {
      title: 'Journalier',
      value: 63,
      icon: Person,
      color: colors.indigo[500]
    },
    {
      title: 'Cadre',
      value: 15,
      icon: Business,
      color: colors.red[600]
    },
    {
      title: 'COnsultant',
      value: 23,
      icon: Assistant,
      color: colors.orange[600]
    }
  ];

  return (
    <Card {...props}>
      <CardHeader title="Employés par catégories" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: 'relative'
          }}
        >
          <Doughnut
            data={data}
            options={options}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2
          }}
        >
          {devices.map(({
            color,
            icon: Icon,
            title,
            value
          }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: 'center'
              }}
            >
              <Icon color="action" />
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {title}
              </Typography>
              <Typography
                style={{ color }}
                variant="h2"
              >
                {value}
                %
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default EmployeesByType;
