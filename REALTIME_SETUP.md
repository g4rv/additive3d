# Real-time Orders Setup Guide

This project now has real-time order synchronization implemented. Orders will automatically update when any admin or user makes changes, preventing conflicts and overlapping edits.

## Features Implemented

✅ **Real-time order updates** - Orders sync instantly across all connected clients
✅ **Admin dashboard** - See new orders, updates, and deletions in real-time
✅ **User profile** - Users see their order status changes immediately
✅ **Connection status indicator** - Admin dashboard shows real-time connection status
✅ **Toast notifications** - Users get notified when orders are created, updated, or deleted
✅ **User filtering** - Users only see updates for their own orders

## How It Works

### 1. Real-time Hook (`lib/hooks/useRealtimeOrders.ts`)
- Subscribes to Supabase real-time changes on the `orders` table
- Listens for INSERT, UPDATE, and DELETE events
- Optionally filters by user_id for user-specific subscriptions
- Automatically updates the orders list when changes occur

### 2. Admin Dashboard (`app/user/admin-dashboard/orders/OrdersTable.tsx`)
- Subscribes to all order changes (no user filter)
- Shows connection status indicator (Wifi icon)
- Displays toast notifications for all order events
- Updates table in real-time without page refresh

### 3. User Profile (`app/user/profile/OrdersList.tsx`)
- Subscribes only to the logged-in user's orders
- Shows toast notifications when admin changes order status
- Automatically removes deleted orders from the list
- No manual refresh needed

## Supabase Configuration Required

⚠️ **IMPORTANT**: You need to enable real-time replication for the `orders` table in Supabase.

### Steps to Enable Real-time:

1. **Go to Supabase Dashboard**
   - Open your project at https://supabase.com/dashboard

2. **Navigate to Database → Replication**
   - Click on "Database" in the left sidebar
   - Click on "Replication"

3. **Enable Replication for Orders Table**
   - Find the `orders` table in the list
   - Toggle the switch to enable replication
   - Make sure these events are enabled:
     - ✅ INSERT
     - ✅ UPDATE
     - ✅ DELETE

4. **Verify RLS Policies**
   - Real-time respects Row Level Security (RLS) policies
   - Make sure your RLS policies allow:
     - Users can SELECT their own orders
     - Admins can SELECT all orders
     - Admins can UPDATE/DELETE orders

## Testing Real-time Functionality

### Test 1: Admin Dashboard
1. Open admin dashboard in two different browsers (or incognito)
2. Create a new order in one browser
3. Both browsers should show the new order instantly

### Test 2: User + Admin
1. User creates an order
2. Admin dashboard shows new order immediately
3. Admin changes order status
4. User profile shows updated status instantly

### Test 3: Order Deletion
1. User or admin deletes an order
2. Order disappears from all connected clients

## Performance Considerations

- **Efficient subscriptions**: Only subscribes to necessary events
- **User filtering**: Users only receive updates for their orders
- **Automatic cleanup**: Subscriptions are cleaned up on component unmount
- **Connection monitoring**: Shows offline status when connection is lost

## Troubleshooting

### Real-time not working?

#### Step 1: Check Browser Console
Open your browser's developer console (F12) and look for these messages:

**Good signs:**
```
[Real-time] Setting up subscription for userId: <userId or ALL>
[Real-time] Subscription status: SUBSCRIBED
[Real-time] ✅ Successfully subscribed to orders changes
```

**Bad signs:**
```
[Real-time] ❌ Channel error - check Supabase configuration
[Real-time] ⏱️ Connection timed out
```

#### Step 2: Test Real-time Events

**When you delete an order**, you should see:
```
[Real-time] Order deleted: { id: "...", ... }
[Real-time] Removing order from list: <orderId>
```

**When you update an order**, you should see:
```
[Real-time] Order updated: { id: "...", status: "completed", ... }
```

**When you create an order**, you should see:
```
[Real-time] Order inserted: { id: "...", ... }
```

#### Step 3: Check Supabase Dashboard

1. **Verify replication is enabled**
   - Go to: Database → Replication
   - Find `orders` table
   - Make sure it's toggled ON
   - Ensure INSERT, UPDATE, DELETE are all checked

2. **Check RLS Policies**
   - Go to: Database → Tables → orders → RLS Policies
   - Make sure there's a SELECT policy that allows:
     - Users to read their own orders: `user_id = auth.uid()`
     - Admins to read all orders

3. **Verify Table Structure**
   - Table must have `user_id` column
   - Table must have `id` column (primary key)

#### Step 4: Check Environment Variables

Make sure these are set in your `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-anon-key
```

#### Step 5: Check Network

1. Open DevTools → Network tab
2. Filter by "WS" (WebSocket)
3. Look for connections to Supabase
4. Should see "realtime" WebSocket connection

#### Common Issues

**Issue: "Channel error" in console**
- **Fix**: Enable replication for `orders` table in Supabase Dashboard

**Issue: No events received on user side when admin deletes**
- **Fix**: This is now fixed! The DELETE event doesn't use server-side filtering anymore
- Check console logs to see if event is received and filtered correctly

**Issue: Events received but order doesn't disappear**
- **Fix**: Check if the order's `id` matches between the event and the local list
- Look for: `[Real-time] Removing order from list: <orderId>`

**Issue: "TIMED_OUT" in console**
- **Fix**: Check your internet connection
- Try refreshing the page
- Check if Supabase is down: https://status.supabase.com/

## Benefits

✅ **No data conflicts** - Everyone sees the same data in real-time
✅ **Better UX** - No manual refresh needed
✅ **Instant feedback** - Changes appear immediately
✅ **Collaboration** - Multiple admins can work simultaneously
✅ **User transparency** - Users see order updates instantly
