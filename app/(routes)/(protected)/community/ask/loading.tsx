import Typography from '@/app/_components/ui/typography'
import React from 'react'

const loading = () => {
    return (
        <div className='flex items-center justify-center'>
            <Typography element='h3' as="h3" color="secondary">loading...</Typography>
        </div>
  )
}

export default loading