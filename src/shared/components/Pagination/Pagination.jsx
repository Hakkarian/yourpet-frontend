import { Box, Pagination, Stack } from '@mui/material';
import MediaQuery from 'react-responsive';

export const PaginateComponent = ({ count, page, onChange }) => {
  return (
    <>
      <MediaQuery maxWidth={767}>
        <Box display="flex" justifyContent="center" pb="20px" pt="30px">
          <Stack spacing={2}>
            {!!count && (
              <Pagination
                count={count}
                page={page}
                onChange={onChange}
                // (_, num) => {
                // setState({ search: search, page: num });
                //   }
                showFirstButton={false}
                showLastButton={false}
                hidePrevButton={true}
                hideNextButton={true}
                color="primary"
              />
            )}
          </Stack>
        </Box>
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <Box display="flex" justifyContent="center" pb="60px" pt="60px">
          <Stack spacing={2}>
            {!!count && (
              <Pagination
                count={count}
                page={page}
                onChange={onChange}
                showFirstButton={true}
                showLastButton={true}
                hidePrevButton={false}
                hideNextButton={false}
                color="primary"
              />
            )}
          </Stack>
        </Box>
      </MediaQuery>
    </>
  );
};
