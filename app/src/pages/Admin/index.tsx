import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AdminLayout } from './AdminLayout';
import { AuthGuard } from './AuthGuard';
import { HomeManager } from './HomeManager';
import { SpecialMomentsManager } from './SpecialMomentsManager';
import { PortfolioManager } from './PortfolioManager';
import { FilmsManager } from './FilmsManager';
import { AlbumsManager } from './AlbumsManager';
import { ServicesManager } from './ServicesManager';
import { AboutManager } from './AboutManager';
import { ReviewsManager } from './ReviewsManager';

export const AdminPortal: React.FC = () => {
  return (
    <AuthGuard>
      <AdminLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/admin/home" replace />} />
          <Route path="/home" element={<HomeManager />} />
          <Route path="/special-moments" element={<SpecialMomentsManager />} />
          <Route path="/portfolio" element={<PortfolioManager />} />
          <Route path="/films" element={<FilmsManager />} />
          <Route path="/albums" element={<AlbumsManager />} />
          <Route path="/services" element={<ServicesManager />} />
          <Route path="/about" element={<AboutManager />} />
          <Route path="/reviews" element={<ReviewsManager />} />
        </Routes>
      </AdminLayout>
    </AuthGuard>
  );
};

export default AdminPortal;
