'use client';

import StaffMenu from '@/app/components/Staff/StaffMenu';
import { StaffTeam } from '@/app/components/Staff/StaffTeam';
import { useState } from 'react';
import { IStaffComponent } from '@/app/components/Staff/interfaces/IStaffComponent';

export default function StaffComponent({ data }: { data: IStaffComponent }) {
  const [rank, setRank] = useState<number>(14);

  return (
    <>
      <StaffMenu
        setRank={(s: number) => setRank(s)}
        currentRank={rank}
        ranks={data.ranks ?? []}
      />
      <StaffTeam
        currentRank={rank}
        rankName={data.ranks?.find((u) => u.id == rank)!.rank_name!}
        staffs={data.staffs!}
      />
    </>
  );
}
